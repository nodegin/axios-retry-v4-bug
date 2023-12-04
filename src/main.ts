import axios from 'axios';
import axiosRetry from 'axios-retry';

console.log(axiosRetry);

axiosRetry(axios, {
  retries: 5,
  retryCondition: () => true,
  retryDelay: (retryCount) => retryCount * 1000,
});
