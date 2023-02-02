import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FaTelegramPlane } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const {t} = useTranslation()
  return (
    <div id='questions'>
      <h1 className='text-3xl mb-5 max-lg:text-xl max-sm:text-sm'>{t("Answers")}</h1>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>{t("question1")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {t("questionAnswer1")}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>{t("question2")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {t("questionAnswer2")}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <div className="m-auto shadow-md flex items-center flex-wrap justify-between px-4 py-3 border border-[#e5e5e5] bg-[#f7f7f7] ">
        <p className="text-[1rem">
          {t("Telega1")}  <span className='max-[465px]:hidden'>{t("Telega2")}</span> {t("Telega3")} <span className='max-[465px]:hidden'>{t("Telega4")}</span> <span className='max-[503px]:hidden'>{t("Telega5")}</span> <span className='max-[585px]:hidden'>{t("Telega6")}</span>
        </p>
          <a href="https://t.me/fevzie_ablaeva">
        <button className="flex items-center gap-2 rounded px-3 py-1 bg-[#3ba4ec]">
          <p className="text-sm font-semibold text-white capitalize">{t('Telega6')}</p>
          <FaTelegramPlane color='white' size={18} />
        </button>
          </a>
      </div>
    </div>
  );
}
