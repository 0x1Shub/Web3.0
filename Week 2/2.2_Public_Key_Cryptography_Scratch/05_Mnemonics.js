import { generateMnemonic, mnemonicToSeedSync } from "bip39";

const mnemonics = generateMnemonic(128);
console.log(mnemonics);

const seed = mnemonicToSeedSync(mnemonics);
console.log(seed);
