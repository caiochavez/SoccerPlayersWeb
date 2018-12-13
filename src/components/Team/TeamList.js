import React, { Component } from 'react'
import {
  GridList, GridListTile, GridListTileBar, ListSubheader, IconButton
} from '@material-ui/core'
import { Info } from '@material-ui/icons'
import ButtonAdd from './ButtonAdd'
import TeamAdd from './TeamAdd'

class TeamList extends Component {

  state = { teamAddOpen: false }

  onAddTeam () {
    console.log('Team addeded')
    this.setState({ teamAddOpen: false })
  }
  
  render () {
    const { root, gridList, icon } = styles
    return (
      <div style={root}>
        <GridList cellHeight={180} style={gridList}>
          <GridListTile key='Subheader' cols={3} style={{ height: 'auto' }}>
            <ListSubheader component='div'>Times</ListSubheader>
          </GridListTile>
        </GridList>
        <ButtonAdd onClick={() => this.setState({ teamAddOpen: true })} />
        <TeamAdd
          open={this.state.teamAddOpen}
          onClose={() => this.setState({ teamAddOpen: false })}
          onSave={this.onAddTeam.bind(this)} />
      </div>  
    )
  }

}

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  gridList: {
    width: '60%',
    height: 400
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  }
}

export default TeamList