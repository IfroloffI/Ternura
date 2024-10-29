import type {HTMLAttributes} from 'react';

export default interface Props extends HTMLAttributes<HTMLDivElement> {
  profile:
    | {
        UserID: string;
        Nickname: string;
        Name: string;
        Surname: string;
        Phone: string;
        Email: string;
        Birth: string;
        Gender: string;
        Height: number;
        Weight: number;
        StepsAmount: number;
        Likes: string[];
        PhotoURLs: string[];
        Qualities: string[];
        Interests: string[];
      }
    | undefined;
  handleNext: VoidFunction;
  handlePrev: VoidFunction;
}
