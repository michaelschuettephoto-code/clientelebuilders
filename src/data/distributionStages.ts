export type StageId =
  | "recruiting"
  | "licensing"
  | "onboarding"
  | "activation"
  | "sales"
  | "placement"
  | "renewals"
  | "retention";

export interface DistributionStage {
  id: StageId;
  index: number;
  label: string;
  headline: string;
  subhead: string;
  metric: string;
  metricLabel: string;
}

export const DISTRIBUTION_STAGES: DistributionStage[] = [
  {
    id: "recruiting",
    index: 1,
    label: "Recruiting",
    headline: "Pipeline begins where most leaks start.",
    subhead: "Candidates enter the system long before production shows up.",
    metric: "01",
    metricLabel: "Velocity",
  },
  {
    id: "licensing",
    index: 2,
    label: "Licensing",
    headline: "Credentials lock the candidate into the chain.",
    subhead: "Time-to-license is the first measurable trust signal.",
    metric: "02",
    metricLabel: "Compliance",
  },
  {
    id: "onboarding",
    index: 3,
    label: "Onboarding",
    headline: "The new agent connects to the operating hub.",
    subhead: "Systems, training, mentorship — or quiet attrition.",
    metric: "03",
    metricLabel: "Time-to-ramp",
  },
  {
    id: "activation",
    index: 4,
    label: "Activation",
    headline: "First case fires across the carrier rail.",
    subhead: "Activation rate predicts twelve-month survival.",
    metric: "04",
    metricLabel: "First case",
  },
  {
    id: "sales",
    index: 5,
    label: "Sales",
    headline: "Policies move agent to carrier.",
    subhead: "Volume hides the conversation that produced it.",
    metric: "05",
    metricLabel: "Throughput",
  },
  {
    id: "placement",
    index: 6,
    label: "Placement",
    headline: "Underwriting closes the loop.",
    subhead: "Placement ratio reveals trust between agent and carrier.",
    metric: "06",
    metricLabel: "Placement %",
  },
  {
    id: "renewals",
    index: 7,
    label: "Renewals",
    headline: "Recurring premium reinforces the network.",
    subhead: "Persistency is the quietest, most expensive metric.",
    metric: "07",
    metricLabel: "Persistency",
  },
  {
    id: "retention",
    index: 8,
    label: "Retention",
    headline: "The full mesh compounds.",
    subhead: "Agents stay. Consumers stay. Revenue stays.",
    metric: "08",
    metricLabel: "Compounding",
  },
];
