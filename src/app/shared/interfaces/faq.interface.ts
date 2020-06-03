export interface IFaq {
  url: string;
  faq_title: string;
  faq_items: IFaqItem[];
}

interface IFaqItem {
  item_id: number;
  item_title: string;
  item_text: string;
}





