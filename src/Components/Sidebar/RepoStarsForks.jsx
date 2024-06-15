import useAsync from "src/Hooks/useAsync";
import { MY_REPOS_URL, WEBSITE_REPO_ID } from "../../Data/variables";
import SvgIcon from "../Shared/MiniComponents/SvgIcon";
import s from "./RepoStarsForks.module.scss";

const RepoStarsForks = () => {
  const [reposData, isError] = useAsync(MY_REPOS_URL);
  const websiteRepo = reposData?.find(
    (repoObj) => repoObj.id === WEBSITE_REPO_ID
  );
  const repoStars = websiteRepo?.stargazers_count;
  const repoForks = websiteRepo?.forks;
  const repoUrl = websiteRepo?.html_url;

  return (
    !isError && (
      <a
        href={repoUrl}
        target="_blank"
        className={s.repoStarsForks}
        title="Website's repository"
      >
        <div className={s.wrapper}>
          <SvgIcon name="star" /> <span>{repoStars}</span>
        </div>

        <div className={s.wrapper}>
          <SvgIcon name="codeFork" /> <span>{repoForks}</span>
        </div>
      </a>
    )
  );
};
export default RepoStarsForks;
