import useAsync from "../../Hooks/useAsync";
import SvgIcon from "../Shared/MiniComponents/SvgIcon";
import styles from "./RepoStarsForks.module.scss";

const myReposUrl = "https://api.github.com/users/Moamal-2000/repos";
const websiteRepoId = 744430639;

const RepoStarsForks = () => {
  const [reposData, isError] = useAsync(myReposUrl);
  const websiteRepo = reposData?.filter(
    (repoObj) => repoObj.id === websiteRepoId
  )?.[0];
  const repoStars = websiteRepo?.stargazers_count;
  const repoForks = websiteRepo?.forks;
  const repoUrl = websiteRepo?.html_url;

  return (
    !isError && (
      <a
        href={repoUrl}
        target="_blank"
        className={styles.repoStarsForks}
        title="Website's repository"
      >
        <div className={styles.wrapper}>
          <SvgIcon name="star" /> <span>{repoStars}</span>
        </div>

        <div className={styles.wrapper}>
          <SvgIcon name="codeFork" /> <span>{repoForks}</span>
        </div>
      </a>
    )
  );
};
export default RepoStarsForks;
