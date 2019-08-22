const env = process.env.NODE_ENV;

const pre = {
  baseUrl: 'https://cascais-pp.mobime.io',
};

const qc = {
  baseUrl: 'https://cascais-qc.mobime.io',
};

let envs = pre;
if (env === 'QC') {
  envs = qc;
} else if (env === 'PRE') envs = pre;

export default envs;
