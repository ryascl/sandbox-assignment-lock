import React from 'react';
import cn from 'classnames';

import Toggle from './Toggle';
import Pencil from './Pencil';

import css from './AssessmentTile.css';

const AssessmentTile = ({
  assessment: { beginsAt, dueAt, timeLimit, isLocked },
  onToggleLocked,
  onBeginEdit
}) => (
  <div className={css.container}>
    <div 
      className={cn(css.header, isLocked ? css.locked : css.unlocked)}>
      <div className={cn(css.title)}>
        {isLocked ? 'Locked' : 'Unlocked'}
      </div>
      <div className={css.toggle}>
        <Toggle isOn={!isLocked} />      
      </div>
    </div>

    <div className={css.body} >
        <div className={css.part}>Assessment <Pencil onClick={onBeginEdit} /></div>
        
        <div className={css.part}>Assessment Begins</div>
        <div className={css.val}>{beginsAt || 'Not Specified'}</div>
        
        <div className={css.part}>Assessment Due</div>
        <div className={css.val}>{dueAt || 'Not Specified'}</div>
        
        <div mt={20}>{timeLimit}</div>
    </div>
  </div>
);

AssessmentTile.defaultProps = {
  assessment: {},
  onToggleLocked: () => {},
  onBeginEdit: () => {}
};

export default AssessmentTile;