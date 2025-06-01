import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity({ name: 'notifications' })
export class Notifications {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  firstName: string;

  @Column()
  content: string;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  
}
