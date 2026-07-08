// Config for Custom Header Layout IgniteAchievements Component
// NOTE: Currently not in use - ACT and AP pages use StudentAchievements instead

export const customHeaderConfigs = {};

export const getCustomHeaderConfig = (pageKey) => {
  return customHeaderConfigs[pageKey];
};
