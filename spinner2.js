let delay = 100;
const char = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
for (let i = 0; i < char.length; i++) {
	setTimeout(() => {
		process.stdout.write(`\r${char[i]}   `);
	}, delay);
	delay += 200;
}
setTimeout(() => {
	process.stdout.write("\n");
}, delay);
