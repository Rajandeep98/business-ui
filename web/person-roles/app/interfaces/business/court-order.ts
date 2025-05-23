/**
 * See:
 * https://github.com/bcgov/business-schemas/blob/master/src/registry_schemas/schemas/court_order.json
 */
export interface CourtOrder {
  fileNumber: string
  orderDate: string
  effectOfOrder: string
  hasPlanOfArrangement?: boolean
}
