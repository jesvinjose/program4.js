import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

function countMultiples(inputList) {
  const result = {};
  let divisible_list = []; // ✅ use let here
  for (let i = 1; i <= 9; i++) {
    divisible_list = inputList.filter((num) => num % i === 0);
    result[i] = divisible_list.length;
  }
  return result;
}

async function main() {
  const rl = readline.createInterface({ input, output });

  try {
    const answer = await rl.question(
      "Enter a list of integers separated by commas (e.g., 1,2,3,4): "
    );

    // Parse and validate input
    const inputList = answer
      .split(",")
      .map((val) => parseInt(val.trim()))
      .filter((val) => !isNaN(val));

    if (inputList.length === 0) {
      throw new Error("Please enter at least one valid integer.");
    }

    const result = countMultiples(inputList);
    console.log("Output:", result);
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    rl.close();
  }
}

main();
