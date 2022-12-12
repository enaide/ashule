import { Thumbnail } from "./thumbnail.model";

export class Book{
    constructor(
        public isbn: string,
        public title: string,
        public rating: number,
        public description: number,
        public authors?: string[],
        public subtitle?: string,
        public published?: string,
        public thumbnails?: Thumbnail[],
        public price?: string,
        public firstThumbnailUrl?: string,
      ) {}
}
