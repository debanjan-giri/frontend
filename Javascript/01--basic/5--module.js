// file 1
export let data = 10;
export default function hello() {}

// file 2
import { data } from "./file.js";
import hello from "./file.js";

// file 3
import * as data from "./file.js";
import { hello as dev } from "./file.js";
