import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { DomainEvent } from '@/core/events/domain-event'
import { Question } from '../entities/question'

export class QuestionBestAnswerChosenEvent implements DomainEvent {
  constructor(
    public question: Question,
    public bestAnswerId: UniqueEntityID,
    public ocurredAt: Date = new Date(),
  ) {}

  getAggregateId(): UniqueEntityID {
    return this.question.id
  }
}
