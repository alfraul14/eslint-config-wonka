import configWonkaFull from "./config/full-js.js";
import configWonkaJs from "./config/wonka-js.js";
import configWonkaTs from "./config/wonka-ts.js";

const eslintConfigWonka = {
	js: configWonkaJs,
	ts: configWonkaTs,
	full: configWonkaFull,
};

export default eslintConfigWonka;
