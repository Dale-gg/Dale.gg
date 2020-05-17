import { ISummonerObject } from '../../Interfaces/ISummoner'

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('summoners')
class Summoner implements ISummonerObject {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  account_id: string

  @Column()
  summoner_id: string

  @Column()
  puuid: string

  @Column()
  profile_icon: number

  @Column()
  summoner_name: string

  @Column()
  summoner_level: number

  @Column()
  region: string

  @Column()
  revision_date: number

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  // Relations -> Tiers, Matchs
}

export default Summoner
