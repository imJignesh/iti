import IgniteAchievementsSideBySide from '@/components/shared/IgniteAchievementsSideBySide';
import { getSideBySideConfig } from '@/data/achievementsSideBySideConfigs';

export default function IgniteAchievements() {
  return <IgniteAchievementsSideBySide config={getSideBySideConfig('ibc-copy')} />;
}
