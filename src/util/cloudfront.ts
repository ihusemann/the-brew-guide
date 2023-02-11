export function makeCloudfrontDomain(path: string) {
  return `${import.meta.env.CLOUDFRONT_DOMAIN}/${path}`;
}
