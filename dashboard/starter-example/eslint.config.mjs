import { FlatCompat } from '@eslint/eslintrc';
import { globalIgnores } from 'eslint/config';

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

const eslintConfig = [
  ...compat.extends('next/core-web-vitals'),
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
];
 
export default eslintConfig;
