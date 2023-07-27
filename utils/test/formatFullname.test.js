const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullname', () => {
  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname()).to.equal('Error');
    expect(formatFullname(20)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
  });

  it('should return an error if "fullName" arg is not in "firstname lastname" format', () => {
    expect(formatFullname(' john doe')).to.equal('Error');
    expect(formatFullname('john doe ')).to.equal('Error');
    expect(formatFullname(' john doe ')).to.equal('Error');
    expect(formatFullname('john  doe')).to.equal('Error');
    expect(formatFullname('john')).to.equal('Error');
    expect(formatFullname(' john')).to.equal('Error');
    expect(formatFullname('john ')).to.equal('Error');
    expect(formatFullname('john doe jr.')).to.equal('Error');
  });

  it('should return proper value if proper arg', () => {
    expect(formatFullname('john doe')).to.equal('John Doe');
    expect(formatFullname('jOHn DOe')).to.equal('John Doe');
    expect(formatFullname('John Doe')).to.equal('John Doe');
    expect(formatFullname('JOHN DOE')).to.equal('John Doe');
    expect(formatFullname('j d')).to.equal('J D');
  });
});