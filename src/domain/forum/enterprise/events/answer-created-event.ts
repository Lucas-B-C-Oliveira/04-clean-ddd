import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { DomainEvent } from '@/core/events/domain-event'
import { Answer } from '../entities/answer'

export class AnswerCreatedEvent implements DomainEvent {
  constructor(
    public answer: Answer,
    public ocurredAt: Date = new Date(),
  ) {}

  getAggregateId(): UniqueEntityID {
    return this.answer.id
  }
}
