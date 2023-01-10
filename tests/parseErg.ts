import { Parser } from '../src/Parser';
import { ergContent } from '../src/data/files/content'
import { Workout } from '../src/data/models/Workout';
import { expect } from 'chai';

describe('', () => {
  it('Should not be empty', () => {
    console.log('Workout', Parser.getInstance().parseERG(ergContent))
    expect(JSON.stringify(Parser.getInstance().parseERG(ergContent))).not.equal(JSON.stringify(new Workout()));
  })
})
