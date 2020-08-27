import { Injectable, ElementRef } from '@angular/core';

const intersection_observable_left_to_right: string = 'intersection-observable-left-to-right';
const intersection_observable_right_to_left: string = 'intersection-observable-right-to-left';

@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {

  rootIntersectionObserver: IntersectionObserver;

  constructor() { }

  setInitialState(): void {
    this.setIntersectionObserver(this.handleIntersections);
  }

  private setIntersectionObserver(handler): void {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: [0, .1, .9, 1]
    };

    this.rootIntersectionObserver = new IntersectionObserver(handler, options);
    this.registerIntersectionObservablesLeftToRight();
    this.registerIntersectionObservablesRightToLeft();
  }

  private setIntersectionObserver_bkp(): void {
    const self = this;
    window.addEventListener('load', (event)=>{

      const options = {
        root: null,
        rootMargin: "0px",
        threshold: [0, .1, .9, 1]
      };

      this.rootIntersectionObserver = new IntersectionObserver(self.handleIntersections, options);
      this.registerIntersectionObservablesLeftToRight();
      this.registerIntersectionObservablesRightToLeft();
    } , false);
  }

  private handleIntersections(entries: IntersectionObserverEntry[], observer): void {
    for(let entry of entries) {
      if(entry.target.classList.contains(intersection_observable_left_to_right)) {
        entry.intersectionRatio > 0 ? handleLeftToRightFlows(entry, true): handleLeftToRightFlows(entry, false);
      }
      if(entry.target.classList.contains(intersection_observable_right_to_left)) {
        entry.intersectionRatio > 0 ? handleRightToLeftFlows(entry, true): handleRightToLeftFlows(entry, false);
      }
    }
  }


  private registerIntersectionObservablesLeftToRight(): void {
    const intersectionObservables: NodeListOf<Element> = document.querySelectorAll(`.${intersection_observable_left_to_right}`);
    console.log(`${intersection_observable_left_to_right}:`);
    console.log(intersectionObservables);
    intersectionObservables.forEach(el => this.addIntersectionObserver(el));
  }

  private registerIntersectionObservablesRightToLeft(): void {
    const intersectionObservables: NodeListOf<Element> = document.querySelectorAll(`.${intersection_observable_right_to_left}`);
    console.log(`${intersection_observable_right_to_left}:`);
    console.log(intersectionObservables);
    intersectionObservables.forEach(el => this.addIntersectionObserver(el));
  }

  private addIntersectionObserver(element: Element): void {
    this.rootIntersectionObserver.observe(element);
  }

}


function handleLeftToRightFlows(entry, isEnable: boolean): void {
  entry.target.style.opacity = isEnable ? 1: 0;
  entry.target.style.transition = 'all 2s';
  entry.target.style.transformOrigin = 'center';
  entry.target.style.transform = isEnable ? 'scale(1) rotateZ(0deg) translateX(0%)' : 'scale(.1) rotateZ(60deg) translateX(-50%)';
}

function handleRightToLeftFlows(entry, isEnable: boolean): void {
  entry.target.style.opacity = isEnable ? 1: 0;
  entry.target.style.transition = 'all 2s';
  entry.target.style.transformOrigin = 'center';
  entry.target.style.transform = isEnable ? 'scale(1) rotateZ(0deg) translateX(0%)' : 'scale(.1) rotateZ(-60deg) translateX(50%)';
}
