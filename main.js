#!/usr/bin/env node
import xlsx from 'xlsx'
import fs from 'fs'
import { check } from './srcs/utils.js';

const ac = process.argv.slice(2);
check(ac);
const excel_file = xlsx.readFile(`${ac[0]}`);

const primeira_planilha = excel_file.SheetNames[0];
console.log(primeira_planilha);

const worksheet = excel_file.Sheets[primeira_planilha];

const jsonData = xlsx.utils.sheet_to_json(worksheet);

const now = new Date;
const timestamp = now.toISOString().replace(/[:.-]/g, '');

fs.writeFileSync(`doc1${timestamp}.json`, JSON.stringify(jsonData, null, 2));

console.log('OK');

