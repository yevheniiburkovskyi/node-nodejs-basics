const parseEnv = () => {
  console.log(process.env);

  Object.keys(process.env).map((item) =>
    console.log(`RSS_${item}=${process.env[item]}`)
  );
};

parseEnv();
