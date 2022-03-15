import { useRouter } from 'next/router';
import PartOne from './Part1';
import PartTwo from './Part2';

const parts = [<PartOne />, <PartTwo />];

export default function CheckingProductFit() {
  const { query } = useRouter();

  return parts[query.part - 1] || <PartOne />;
}
