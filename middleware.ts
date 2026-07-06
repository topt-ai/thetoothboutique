export const config = {
  matcher: '/',
};

export default async function middleware(request: Request) {
  const url = new URL(request.url);
  const host = request.headers.get('host') || '';

  if (host === 'review.thetoothboutique.com' && url.pathname === '/') {
    url.pathname = '/review.html';
    return fetch(url);
  }
}
