const word = ["\r|   ","\r/   ","\r-   ","\r\\   ","\r|   ","\r/   ","\r-   ","\r\\   ","\r|   ","\n"];
let timer = 100;
for (const letter of word) {
  setTimeout(() => {
    process.stdout.write(letter);
  }, timer);
  timer += 200;
}