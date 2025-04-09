import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const fetchProfile = async () => {
  const res = await fetch("http://localhost:5000/profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to fetch profile");
  return res.json();
};

const fetchServer = async (profileId) => {
  const res = await fetch(`/profiles/${profileId}/server`);
  if (!res.ok) throw new Error("Failed to fetch server");
  return res.json();
};

export const Home = () => {
  const navigate = useNavigate();

  const { data: profile, isLoading: loadingProfile } = useQuery({
    queryKey: ["profile"],
    queryFn: fetchProfile,
  });
  console.log(profile)
  const { data: server, isLoading: loadingServer } = useQuery({
    queryKey: ["server", profile?.id],
    queryFn: () => fetchServer(profile.id),
    enabled: !!profile,
  });

  useEffect(() => {
    if (server) {
      navigate(`/servers/${server.id}`);
    }
  }, [server, navigate]);

  if (loadingProfile || loadingServer) return <div>Loading...</div>;

  return <div>Create your server</div>;
}
