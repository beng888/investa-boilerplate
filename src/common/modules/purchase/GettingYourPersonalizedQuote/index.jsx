import { useRouter } from 'next/router';
import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3';
import Part4 from './Part4';
import Part5 from './Part5';
import Part6 from './Part6';
import Part7 from './Part7';

const parts = [<Part1 />, <Part2 />, <Part3 />, <Part4 />, <Part5 />, <Part6 />, <Part7 />];

export default function CheckingProductFit() {
  const { query } = useRouter();

  return parts[query.part - 1] || <Part1 />;
}
