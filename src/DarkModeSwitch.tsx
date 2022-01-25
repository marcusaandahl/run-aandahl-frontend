import React, { useEffect, useState } from 'react';
import { Switch } from '@headlessui/react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';

function DarkModeSwitch(props: {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (enabled) {
      props.setState(true);
    } else {
      props.setState(false);
    }
  }, [enabled]);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? 'bg-gray-600' : 'bg-yellow-400'
      } relative inline-flex items-center h-8 rounded-full w-16 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
    >
      <span
        className={`${
          enabled ? 'translate-x-9' : 'translate-x-1'
        } inline-block w-6 h-6 transform bg-white rounded-full transition-transform`}
      />
      <SunIcon
        className={`${
          !enabled ? 'text-yellow-400' : 'text-gray-600'
        } w-6 h-6 inline-block absolute left-1`}
      />
      <MoonIcon
        className={`${
          enabled ? 'text-gray-600' : 'text-yellow-400'
        } w-6 h-6 inline-block absolute right-1`}
      />
    </Switch>
  );
}

export default DarkModeSwitch;
