import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { BounceLoader } from "react-spinners";
import { useUserContext } from "../../context/UserContext";
import Infos from "../Infos";
import SocialMedia from "../SocialMedia";

const Container: React.FC = ({ children }) => (
  <div className="h-3/4 w-full rounded-lg p-10 bg-200">{children}</div>
);

const Content: React.FC = () => {
  const { username, setData } = useUserContext();
  const [imageLoad, setImageLoad] = useState(false);

  const { isLoading, data } = useQuery(
    username,
    () =>
      fetch(`https://api.github.com/users/${username}`).then((res) => {
        return res.json();
      }),
    {
      enabled: username !== "",
      refetchOnWindowFocus: false,
      staleTime: 0,
      cacheTime: 0,
    }
  );

  useEffect(() => {
    setImageLoad(false);
    setData(data);
  }, [data]);

  if (isLoading || !data || !username) {
    return (
      <Container>
        <h1 className="text-2xl text-white">Loading...</h1>
      </Container>
    );
  }

  const override = `
    position: absolute;
  `;

  return (
    <Container>
      <div className="flex gap-5">
        <div className="w-auto">
          <div className="w-20 h-20 rounded-full grid place-items-center">
            <BounceLoader
              color={"#0583F2"}
              loading={!imageLoad}
              css={override}
              size={60}
            />
            <img
              className="rounded-full h-full w-full z-10"
              src={
                data?.avatar_url
                  ? data.avatar_url
                  : "https://www.ecp.org.br/wp-content/uploads/2017/12/default-avatar-1.png"
              }
              onLoad={() => setImageLoad(true)}
              alt="Avatar"
            />
          </div>
        </div>
        <div className="w-full h-full flex flex-col">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <div className="w-full flex justify-between items-center">
                <div className="text-2xl text-white font-bold">
                  {data.name || "No name"}
                </div>
                <div className="text-sm text-grey">
                  Joined {dayjs(data?.created_at).format("DD MMM YYYY")}
                </div>
              </div>
              <div className="w-full text-sm text-light-blue">
                {data?.login ? `@${data?.login}` : "Not Available"}
              </div>
            </div>

            <div className="w-full text-sm text-grey">
              {data.bio || "No bio available"}
            </div>

            <Infos />
            <SocialMedia />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Content;
