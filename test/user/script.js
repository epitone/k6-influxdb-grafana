import http from 'k6/http';

export const options = {
  // stages: [
  //   { duration: '1s', target: 20 },
  //   { duration: '20s', target: 0 },
  // ],
  vus: 10,
  duration: '10s',
};

const params = {
  headers: {
    timeout: '10s',
  },
};

export default function () {
  http.get('https://www.google.com', params);
}
