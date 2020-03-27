import React from 'react';

export default React.createContext({
  vbucks: null,
  setVbucks: vbucks => {},
  dailies: null,
  setDailies: dailies => {},
  alerts: null,
  setAlerts: setAlerts => {},
  averageAlerts: null,
  setAverageAlerts: averageAlerts => {},
  level: null,
  setLevel: level => {},
  experience: null,
  setExperience: experience => {},
  extraXP: null,
  setExtraXP: extraXP => {},
  unfinishedXP: null,
  setUnfinishedXP: unfinishedXP => {},
  loginDay: null,
  setLoginDay: loginDay => {},
  punchCardStates: null,
  setPunchCardStates: states => {},
  dailyChallengeStates: null,
  setDailyChallengeStates: dailyChallengeState => {}
});
