const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({
  auth: "YOUR_PERSONAL_ACCESS_TOKEN",
});

const owner = "YOUR_GITHUB_USERNAME";
const repo = "YOUR_REPOSITORY_NAME";

const watchRepo = async () => {
  try {
    await octokit.activity.setRepoSubscription({
      owner,
      repo,
      subscribed: true,
    });
    console.log(`Watching ${owner}/${repo} for changes...`);
  } catch (error) {
    console.error("An error occurred while watching the repository:", error);
  }
};

watchRepo();
