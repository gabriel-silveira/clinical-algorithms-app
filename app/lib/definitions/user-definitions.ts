export interface IUserSearchParams {
  searchParams?: Promise<{
    query?: string;
    page?: number;
  }>
}
