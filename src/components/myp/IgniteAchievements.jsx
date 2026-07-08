import IgniteAchievementsCardGrid from '@/components/shared/IgniteAchievementsCardGrid';
import { getCardGridConfig } from '@/data/achievementsCardGridConfigs';

export default function IgniteAchievements() {
  return <IgniteAchievementsCardGrid config={getCardGridConfig('myp')} />;
}
