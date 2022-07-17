function countPackages(carriers = [], carrierID = "") {
  if (!Array.isArray(carriers)) return new Error("Error: Carriers must be an array")
  if (typeof carrierID !== "string") return new Error("Error: CarrierID must be an string")
  if (carriers.length < 1 || !carrierID) return new Error("Error: Carriers and CarrierID params cannot be empty")

  const [, carrierPackages = 0, carrierTeam = []] = carriers.find(([carrierName]) => carrierName === carrierID) || []
  return carrierPackages + carrierTeam.reduce((packages, teamMemberName) => packages + countPackages(carriers, teamMemberName), 0)
}

module.exports = countPackages