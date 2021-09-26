const { writeFile } = require('fs/promises');
const { Buffer } = require('buffer');

const writeToFile = async (data) => {
    try {
      const newData = `const posts = ${JSON.stringify(data)};\n\nmodule.exports = posts;`;
      const bufferedData = new Uint8Array(Buffer.from(newData));
      console.log(newData, bufferedData);
      await writeFile('./dummy-data/posts.js', bufferedData);
      return data;
    } catch (err) {
      // When a request is aborted - err is an AbortError
      console.error(err);
    }
};

module.exports = writeToFile;
