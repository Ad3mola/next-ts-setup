const { env } = process;

module.exports = {
  env: {
    NEXT_PUBLIC_API_URL: env.NEXT_PUBLIC_API_URL || 'http://api-staging',
    //Please make sure next variable is empty before merging into master
    NEXT_PUBLIC_API_PR: env.NEXT_PUBLIC_API_PR || '',
    NEXT_PUBLIC_API_DOMAIN: env.NEXT_PUBLIC_API_DOMAIN || 'mvp.netishop.com',
    NEXT_PUBLIC_API_PATH: env.NEXT_PUBLIC_API_PATH || '/graphql'
  }
};
