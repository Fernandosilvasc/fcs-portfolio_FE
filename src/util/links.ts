interface Links {
  resume: string | undefined;
  gitHub: string | undefined;
  linkedin: string | undefined;
  email: string | undefined;
}

const GetLinks = (): Links => {
  return {
    resume: process.env.REACT_APP_RESUME_LINK,
    gitHub: process.env.REACT_APP_GITHUB_LINK,
    linkedin: process.env.REACT_APP_LINKEDIN_LINK,
    email: process.env.REACT_APP_EMAIL_ADDRESS,
  };
};

export default GetLinks;
