import React from 'react'
import SourceAccounts from './SourceAccounts';
import TeamMembers from './TeamMembers';

function MenuItems() {
    return (
        <div className="flex flex-col justify-between h-full w-full overflow-hidden">
            <SourceAccounts />
            <TeamMembers />
        </div>
    )
}

export default MenuItems
