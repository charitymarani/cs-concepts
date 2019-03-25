class Event {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
}

class CorporateEvent extends Event {
  constructor(name, location, roiTarget) {
    super(name, location);
    this.roiTarget = roiTarget;
  }
}

class Report {
  constructor() {
    this.events = [];
  }

  addEvent(name, location) {
    this.events.push({name, location});
  }

  generateReport() {
    return console.log(this.events);
  }
}

const gdgMeet = new CorporateEvent('GDG Leads Retreat', 'Kempinski', '20%');
const albumLaunch = new Event('Shani Album Launch', 'Goethe Institute');

const report = new Report();

report.addEvent('Award Ceremony', 'Safari Part');
report.addEvent('Art Competition', 'Museum');

report.generateReport();

console.log(gdgMeet.location);
console.log(gdgMeet.roiTarget);
console.log(albumLaunch);
