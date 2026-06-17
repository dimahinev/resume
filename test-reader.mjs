import { createReader } from '@keystatic/core/reader';
import config from './keystatic.config.js';

const reader = createReader(process.cwd(), config);
try {
  const cv = await reader.singletons.cv.read();
  console.log('result:', cv ? 'GOT DATA - keys: ' + Object.keys(cv).join(', ') : 'NULL');
} catch (e) {
  console.log('error:', e.message);
}
