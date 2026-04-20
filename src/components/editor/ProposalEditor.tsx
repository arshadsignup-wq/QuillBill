import { useInvoiceContext } from '../../context/InvoiceContext';
import Card from '../ui/Card';
import Textarea from '../ui/Textarea';

export default function ProposalEditor() {
  const { data, dispatch } = useInvoiceContext();

  return (
    <Card title="Proposal Content">
      <div className="flex flex-col gap-4">
        <Textarea
          label="Executive Summary"
          id="executive-summary"
          value={data.executiveSummary}
          onChange={(e) => dispatch({ type: 'SET_EXECUTIVE_SUMMARY', payload: e.target.value })}
          placeholder="Provide a high-level overview of the proposal and its value proposition..."
          rows={4}
        />
        <Textarea
          label="Project Scope"
          id="project-scope"
          value={data.projectScope}
          onChange={(e) => dispatch({ type: 'SET_PROJECT_SCOPE', payload: e.target.value })}
          placeholder="Describe the project scope, objectives, and background..."
          rows={5}
        />
        <Textarea
          label="Proposed Solution"
          id="proposed-solution"
          value={data.proposedSolution}
          onChange={(e) => dispatch({ type: 'SET_PROPOSED_SOLUTION', payload: e.target.value })}
          placeholder="Outline the methodology, approach, and tools you'll use..."
          rows={4}
        />
        <Textarea
          label="Deliverables"
          id="deliverables"
          value={data.deliverables}
          onChange={(e) => dispatch({ type: 'SET_DELIVERABLES', payload: e.target.value })}
          placeholder="List the key deliverables and milestones..."
          rows={4}
        />
        <Textarea
          label="Timeline"
          id="timeline"
          value={data.timeline}
          onChange={(e) => dispatch({ type: 'SET_TIMELINE', payload: e.target.value })}
          placeholder="Outline the project timeline and phases..."
          rows={3}
        />
      </div>
    </Card>
  );
}
