export interface MajorCredits {
  credits: number;
  brand: string;
}

export interface MinorCredits {
  credits: number;
  brand: string;
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const credits = subject1.credits + subject2.credits;
  const brand = subject1.brand;
  return { credits, brand };
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const credits = subject1.credits + subject2.credits;
  const brand = subject1.brand;
  return { credits, brand };
}

