import React from 'react';

const DARK_MODE_KEY = 'theme.dark_mode';
const INHERIT_SYSTEM_KEY = 'theme.inherit_system';

const DARK_THEME = { color: '#F7EFE5', background: '#674188', accent: '#C3ACD0' };
const LIGHT_THEME = { color: '#674188', background: '#FFFBF5', accent: '#C3ACD0' };

const DarkMode = __themeSettingFactory__(DARK_MODE_KEY);
const InheritSystem = __themeSettingFactory__(INHERIT_SYSTEM_KEY);

function __themeSettingFactory__(settingKey: string) {
  return ({
    getSetting: function () {
      try {
        return JSON.parse(window.localStorage.getItem(settingKey)!) === true;
      } catch (e) { return false; }
    },

    updateSetting: function (value: boolean) {
      try {
        window.localStorage.setItem(settingKey, JSON.stringify(value === true));
      } catch (e) { }
    }
  });
}

export { DARK_THEME, LIGHT_THEME, DarkMode, InheritSystem };

export default React.createContext(DARK_THEME);